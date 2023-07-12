import Badge from "../badge/Badge";
import "./badges.scss";

const Badges = () => {
   const badges = [
      {
         id: 1,
         name: "trekking",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         img: "https://img.icons8.com/sf-regular/96/ffffff/trekking.png",
         bgColor: "bg-green-1",
         width: "96",
         height: "96",
         imgCls: "badge-img"
      },
      {
         id: 2,
         name: "tent",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         img: "https://img.icons8.com/ios-filled/100/ffffff/tent.png",
         bgColor: "bg-blue-1",
         width: "100",
         height: "100",
         imgCls: "badge-img-19"
      },
      {
         id: 3,
         name: "skimboarding",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         img: "https://img.icons8.com/ios-glyphs/90/ffffff/skimboarding.png",
         bgColor: "bg-blue-2",
         width: "90",
         height: "90",
         imgCls: "badge-img"
      },
      {
         id: 4,
         name: "hot-air-balloon--v1",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         img: "https://img.icons8.com/material/96/ffffff/hot-air-balloon--v1.png",
         bgColor: "bg-yellow-1",
         width: "96",
         height: "96",
         imgCls: "badge-img"
         
      },
      {
         id: 5,
         name: "birds",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
         img: "https://img.icons8.com/external-flat-icons-inmotus-design/67/ffffff/external-bird-birds-flat-icons-inmotus-design.png",
         bgColor: "bg-green-2",
         width: "67",
         height: "67",
         imgCls: "badge-img-18"
      },
   ];
   return (
      <div className="badges">
         {badges.map((badge) => (
            <Badge badge={badge} key={badge.id} />
         ))} 
      </div>
   );
};

export default Badges;
