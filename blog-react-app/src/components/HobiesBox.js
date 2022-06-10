const HobiesBox = () => {
  const HobiesBox = [
    {
      title: "Reading Book",
      img: "https://t4.ftcdn.net/jpg/03/04/69/47/240_F_304694718_2MUzMFTHZErOVgY2etcQl12zgf3WPzBH.jpg",
    },
    {
      title: "Playing Football",
      img: "https://t3.ftcdn.net/jpg/03/26/08/54/240_F_326085469_6VWveUbRyQULDrBzZlXREAwgpsKgHPsD.jpg",
    },
    {
      title: "Machine Learning",
      img: "https://t4.ftcdn.net/jpg/02/76/92/51/240_F_276925128_ljN3RbndoRH0AeQwnvFoBM5W4aq8tBJV.jpg",
    },
    {
      title: "Camp",
      img: "https://t3.ftcdn.net/jpg/03/13/53/96/240_F_313539644_CEOSa4I6aRv14vUnR0TWCupcPKpDAlSD.jpg",
    },
    {
      title: "Walking Nature",
      img: "https://t3.ftcdn.net/jpg/03/34/84/66/240_F_334846694_lWTJcdTz3kpkVYdDRehNWtjoViY9IMYu.jpg",
    },
    {
      title: "Discovery and Learning",
      img: "https://t4.ftcdn.net/jpg/03/97/97/21/240_F_397972122_tdn20xxtTGsRNOLPGOKbqba2W2rG0oDk.jpg",
    },
  ];

  return (
    <div className="hobiesContainer">
      {HobiesBox.map((hobies) => (
        <div className="hobies">
          <img src={hobies.img} alt="" />
          <h1>{hobies.title}</h1>
        </div>
      ))}
        <div id="hello" style={{ display:"none"}}></div>
    </div>
    
  );
};

export default HobiesBox;
