import Container from "../../components/Container";
import { inputs } from "../../constants";
import InputField from "./InputField";
import { useMutation } from "@tanstack/react-query";
import { addPlace } from "../../api/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["add"],
    mutationFn: (data) => addPlace(data),
    onSuccess: () => {
      toast.success("Konaklama oluşturuldu");
      navigate("/");
    },
    onError: () => {
      toast.error("İşlem başarısız oldu");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    let data = Object.fromEntries(form.entries());
    data.amenities = data.amenities.split(",");
    data.availability = data.availability ? true : false;
    mutation.mutate(data);
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg"
      >
        {inputs.map((props, key) => (
          <InputField key={key} {...props} />
        ))}

        <button className="col-span-2 mt-5 bg-blue-500 py-3 px-6 text-white font-bold rounded-md transition hover:bg-blue-600 disabled:bg-blue-300">
          Oluştur
        </button>
      </form>
    </Container>
  );
};

export default Create;
