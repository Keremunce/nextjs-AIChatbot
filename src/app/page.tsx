"use client";
import { useEffect, useState, useRef } from "react";
import { Home, Send } from "@mui/icons-material";

type Message = {
	role: "user" | "assistant";
	content: string;
};

export default function HomePage() {
	const [input, setInput] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);
	const chatBoxRef = useRef<HTMLDivElement>(null);
	const defaultMessages = ["Remembers what user said earlier in the conversation", "Morning routine for productivity", "Best practices for coding in React", "How to stay motivated while working from home"];
	const [showDefaultMessages, setShowDefaultMessages] = useState(true);

	const sendMessage = async (message: string = input): Promise<void> => {
		const newMessages: Message[] = [...messages, { role: "user", content: input }];
		setMessages(newMessages);

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt: input }),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setMessages([...newMessages, { role: "assistant", content: data.reply }]);
		} catch (error) {
			console.error("Error:", error);
			setMessages([...newMessages, { role: "assistant", content: "An error occurred. Please try again." }]);
		} finally {
			setInput("");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter") {
			e.preventDefault();
			sendMessage();
		}
	};

	useEffect(() => {
		if (chatBoxRef.current) {
			chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
		}
	}, [messages]);
	const handleDefaultMessageClick = (message: string) => {
		setInput(message);
		setShowDefaultMessages(false); 
		sendMessage(message);
	};
	
	return (
		<div className="mainContainer relative m-auto">
			<div>
				<a className="w-full h-full ListButton" href="https://keremunce.com">
					<Home />
				</a>
			</div>
			<div className="innerContainer">
				<div ref={chatBoxRef} tabIndex={-1} className="chatBox">
					{showDefaultMessages && (
						<div className="defaultMessagesWrapper">
							{defaultMessages.map((item, index) => (
								<div key={index} onClick={() => handleDefaultMessageClick(item)} className="defaultMessage">
									{item}
								</div>
							))}
						</div>
					)}
					{messages.map((msg, index) => (
						<div key={index}>
							{msg.role === "user" ? (
								<div className="userMsg">
									<div className="msgImgContainer">
										<img width={37} src="/user.jpg" alt="user" />
									</div>
									<div>
										<p>{msg.content}</p>
									</div>
								</div>
							) : (
								<div className="assistantMsg">
									<div className="msgImgContainer">
										<img width={37} src="/bot.jpg" alt="bot" />
									</div>
									<div>
										<p>{msg.content}</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="inputWrapper">
					<div className="inputContainer">
						<input onKeyDown={handleKeyDown} tabIndex={0} type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Send a message." />
						<button onClick={() => sendMessage()}>
							<Send />
						</button>
					</div>
				</div>
			</div>
		</div>
	);	
}
