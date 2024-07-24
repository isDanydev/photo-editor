interface Props {
  image: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UrlLinkImage = ({ image, handleChange }: Props) => {
  return (
    <section className=" w-[80%]">
      {/* 
      //Configurar para que se muestre la img default si el status es error y si
      es ok muestre la imagen
       */}
      <input
        type="text"
        className="rounded outline-none border-none px-2 w-[90%] text-black"
        placeholder="https://www.google.com.ar"
        value={image}
        onChange={handleChange}
      />
    </section>
  );
};
export default UrlLinkImage;
