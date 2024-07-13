import fb from "../../../constants/svg/fb.svg";
import twitter from "../../../constants/svg/twitter-color-svgrepo-com.svg";

const PersonalContactDetails = ({ className }) => {
  return (
    <div className={`${className} w-auto`}>
      <img
        className="rounded-2xl w-40 h-40"
        alt="Profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOJee-huRcqRP6n_fZKOv_hY-aIJHleWpTOWsPIKik_EbkH4zUh9idtVMSRkoINZPduM&usqp=CAU"
      />
      <div className="w-40 h-fit mx-auto">
        <div className="mt-3 font-bold mx-auto text-xl">Vaishnavi Vidap</div>
        <div className="bg-shadow rounded-md mx-auto mt-1.5 py-1 px-2 text-sm w-fit">
          Software Developer
        </div>
        <div className="mt-2 flex gap-3 mx-auto">
          <img
            src={fb}
            className="w-6 h-6 object-cover bg-shadow p-1 rounded-md"
            alt="facebook"
          />
          <img
            src={twitter}
            className="w-6 h-6 object-cover bg-shadow p-1 rounded-md"
            alt="facebook"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalContactDetails;
