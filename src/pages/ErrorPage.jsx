import Lottie from "lottie-react";
import error from "../../public/404.json"

const ErrorPage = () => {
    return (
        <div className="">
            <Lottie animationData={error} className="w-96" />
        </div>
    );
};

export default ErrorPage;