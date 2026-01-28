import {Atom} from "react-loading-indicators"
const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-08">
            <Atom color="#703bf7"  />
        </div>
    );
};

export default Loader;
