import React, { useEffect, useState } from "react";

const CountdownTimer = ({ generate_invoice, time, history_ticket }) => {
    // Waktu expired yang diinginkan (Mar 07, 2024 18:22:26)
    const targetDate = new Date(time).getTime();

    // State untuk menyimpan waktu mundur
    const [timeRemaining, setTimeRemaining] = useState(
        calculateTimeRemaining()
    );

    // Fungsi untuk menghitung waktu mundur
    function calculateTimeRemaining() {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            return {
                days,
                hours,
                minutes,
                seconds,
            };
        } else {
            alert("Waktu Sudah Habis!");
            localStorage.removeItem(generate_invoice);
            window.location.href = "/";
            return null; // Jika waktu telah berakhir
        }
    }

    // Efek samping untuk mengupdate waktu mundur setiap detik
    useEffect(() => {
        const intervalId = setInterval(() => {
            const remainingTime = calculateTimeRemaining();
            if (remainingTime !== null) {
                setTimeRemaining(remainingTime);
            } else {
                clearInterval(intervalId);
                localStorage.removeItem(history_ticket);
            }
        }, 1000);

        // Membersihkan interval saat komponen unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {timeRemaining !== null ? (
                <>
                    <p className="text-center font-semibold text-lg">
                        Selesaikan Pesanamu Dalam
                    </p>
                    <p className="text-red-500 font-semibold text-center text-2xl">
                        {timeRemaining.hours === 0 ? "00" : timeRemaining.hours}{" "}
                        :{" "}
                        {timeRemaining.minutes < 10
                            ? `0` + timeRemaining.minutes
                            : timeRemaining.minutes}{" "}
                        :{" "}
                        {timeRemaining.seconds < 10
                            ? `0` + timeRemaining.seconds
                            : timeRemaining.seconds}
                    </p>
                </>
            ) : (
                <div className="my-5">
                    <p className="text-center font-semibold text-lg">
                        {" "}
                        Selesaikan Pesanamu Dalam
                    </p>
                    <p className="font-bold text-3xl flex justify-center items-center text-red-500">
                        00:00:00
                    </p>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
