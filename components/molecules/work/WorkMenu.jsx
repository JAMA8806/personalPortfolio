const Menu = ({handleOpcionClick}) => {
  
  return (
    <div>
      <div onClick={() => handleOpcionClick('Option1')}>Opción 1</div>
      <div onClick={() => handleOpcionClick('Option2')}>Opción 2</div>
      <div onClick={() => handleOpcionClick('Option3')}>Opción 3</div>
      <div onClick={() => handleOpcionClick('Option4')}>Opción 4</div>
    </div>
  );
};

export default Menu;
