import React from "react";
const LoadingAnimation = ({ click }) => {
    return (
        <div
            className={`h-screen w-screen ${
                click === true ? "flex" : "hidden"
            } items-center justify-center fixed  z-50 bg-loading`}
            id="loading-animation"
        >
            <div className="bg-white w-[250px] p-5 rounded-xl">
                <div className="">
                    <img
                        src="/images/icon/tess.gif"
                        alt="loading.."
                        width="250"
                    />
                </div>
            </div>
        </div>
    );
};
export default LoadingAnimation;
