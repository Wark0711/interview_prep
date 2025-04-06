'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function Agent({ userName, userId, type }: AgentProps) {

    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [messages, setMessages] = useState<SavedMessage[]>([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [lastMessage, setLastMessage] = useState<string>("");

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src={'/ai-avatar.png'} alt="vapi" width={65} height={54} className="object-cover" />
                        {/* {isSpeaking && <span className="animate-speak" />} */}
                    </div>
                    <h3>AI Interview</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image src={'/user-avatar.png'} alt="user-avatar" height={540} width={540} className="rounded-full object-cover size-[120px]" />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            {
                messages?.length > 0
                    ? <div className="transcript-border">
                        <div className="transcript">
                            <p key={lastMessage} className={cn('transition-opacity duration-500', 'animate-fadeIn opacity-100')}>{lastMessage}</p>
                        </div>
                    </div>
                    : <></>
            }

            <div className="w-full flex justify-center">
                {
                    callStatus !== "ACTIVE"
                        ? <>
                            <button className="relative btn-call">
                                <span
                                    className={cn(
                                        "absolute animate-ping rounded-full opacity-75",
                                        callStatus !== "CONNECTING" && "hidden"
                                    )}
                                />

                                <span className="relative">
                                    {
                                        callStatus === "INACTIVE" || callStatus === "FINISHED"
                                            ? "Call"
                                            : ". . ."
                                    }
                                </span>
                            </button>
                        </>
                        : <button className="btn-disconnect">End</button>
                }
            </div>
        </>
    )
}

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}