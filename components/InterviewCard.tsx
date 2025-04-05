import dayjs from "dayjs";

export async function InterviewCard({
    interviewId,
    userId,
    role,
    type,
    techstack,
    createdAt,
}: InterviewCardProps) {

    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");

    return (
        <div className=""></div>
    )
}