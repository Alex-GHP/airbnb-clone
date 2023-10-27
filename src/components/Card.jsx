import React from "react";

function Card(props) {
  let badgeText
    if (props.card.openSpots === 0)
      badgeText = "SOLT OUT"
    else if (props.card.location === "Online")
      badgeText = "Online"
  return (
    <div className="pl-8 pb-10  flex flex-col flex-[0_0_auto] relative">
      {badgeText && <div className="absolute top-3 left-11 bg-white p-1.5 rounded-sm font-bold">{badgeText}</div>}
      <img className='rounded-lg w-64' src={`/images/${props.card.coverImg}`} alt="Photo of Katie Zaferes" />
      <div className="flex flex-row my-2">
        <img className="h-4 self-center" src="public/star.png" alt="Star" />
        <span className="mr-2 ml-0.5">{props.card.stats.rating}</span>
        <p className="text-gray-500">({props.card.stats.reviewCount}) - {props.card.location}</p>
      </div>
      <p className="mb-2 overflow-hidden text-ellipsis">{props.card.title}</p>
      <p>
        <strong>From ${props.card.price} </strong>/ person
      </p>
    </div>
  );
}

export default Card;
