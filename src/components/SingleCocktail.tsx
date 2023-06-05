interface ICockProp {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
}
const Cocktail: React.FC<ICockProp> = ({ id, name, image, info, glass }) => {
  return (
    <article>
      <img src={image} alt='' />
    </article>
  );
};
export default Cocktail;
