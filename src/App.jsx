import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFruts';
import ButtonState from './components/ButtonState'

const App = () => {
  const title = "Mi tutulo desde una constante";
  const classTitle = "text-center";
  const pathIMG = "https://picsum.photos/200/300";
  const user = true;
  const fruts = ["🍎", "🍌", "🍐"];

  return (
    <>
      <ButtonState />
      <h1 className={classTitle}>{title}</h1>
      <img src={pathIMG} alt={`imagen-${title}`} />
      <MyButton text="boton 1" />
      <MyButton text="boton 2" />
      <MyButton text="boton 3" />

      <WelcomeText user={user} />

      <ListFruts fruts={fruts} />
    </>
  )
};

export default App;