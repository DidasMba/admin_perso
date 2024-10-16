/** @format */

"use client";
import { Provider } from "react-redux";
import { store } from "./_lib/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            {children}
            <ToastContainer />
        </Provider>
    );
}
