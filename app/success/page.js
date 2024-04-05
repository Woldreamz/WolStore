import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="sticky top-0 p-6">
            Hooray! <br />
            <Link href={'/'}>Back home</Link>
        </div>
    )
}