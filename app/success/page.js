import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex flex-col p-6 flex-1 items-center justify-center pb-10 md:pb-14">
            Hooray! 
            <Link href={'/'}>Back home</Link>
        </div>
    )
}