import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();

  const handleChange = (name, value) => {
    params.set(name, value);
    setParams(params);
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-6 lg:gap-10 bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-2">
        <label className="font-bold text-gray-700">Nereye ?</label>
        <select
          onChange={(e) => handleChange("location", e.target.value)}
          className="border py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Seçiniz</option>
          <option>İstanbul</option>
          <option>Ankara</option>
          <option>Antalya</option>
          <option>Bursa</option>
          <option>Adana</option>
          <option>Mersin</option>
          <option>İzmir</option>
          <option>Eskişehir</option>
          <option>Rize</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-gray-700">
          Konaklama yeri adına göre ara
        </label>
        <input
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="ör:Seaside Villa"
          className="border py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 transition"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-gray-700">Sıralama Ölçütü</label>
        <select
          onChange={(e) => handleChange("order", e.target.value)}
          className="border py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Seçiniz</option>
          <option value="price-asc">Fiyat: düşükten yükseğe</option>
          <option value="price-desc">Fiyat: yüksekten düşüğe</option>
          <option value="rating-asc">Yıldız: düşükten yükseğe</option>
          <option value="rating-desc">Yıldız: yüksekten düşüğe</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="reset"
          onClick={() => setParams({})}
          className="bg-blue-500 p-2 px-5 text-white font-bold rounded-md transition hover:bg-blue-600"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
