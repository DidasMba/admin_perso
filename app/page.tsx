/** @format */

import { getCcookie } from "@/lib";
import LoginForm from "./_components/signin/SignForm";

export default async function Home() {
    const token = await getCcookie();
    return (
        <main className='min-h-svh w-full flex items-center bg-gray-100 px-6 lg:px-0'>
            <LoginForm isToken={token!} />
        </main>
    );
}
