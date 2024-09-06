import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = ({ id }) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: "delete",
    mutationFn: () => deletePlace(id),
    onSuccess: () => {
      toast.info("Hotel akıştan kaldırıldı");
      navigate("/");
    },
    onError: () => {
      toast.error("Üzgünüz bir hata oluştu");
    },
  });

  return (
    <div className="flex justify-between items-center mb-6">
      <Link
        to="/"
        className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-full transition hover:bg-gray-100 hover:shadow-lg"
      >
        <MdKeyboardArrowLeft className="text-lg" />
        <span className="text-gray-700 font-medium">Geri</span>
      </Link>

      <button
        disabled={mutation.isPending}
        onClick={mutation.mutate}
        className="flex items-center gap-2 border border-red-300 py-2 px-4 rounded-full transition hover:bg-red-100 hover:shadow-lg disabled:opacity-50"
      >
        <FaRegTrashAlt className="text-lg text-red-500" />
        <span className="text-red-500 font-medium">Sil</span>
      </button>
    </div>
  );
};

export default Buttons;
