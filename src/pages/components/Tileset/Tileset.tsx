import { MouseEvent, useState } from "react"

type TRotation = "left" | "right";
type TStatus = "pending" | "success" | "fail";

interface ITile {
  status: TStatus
}

export default function TileSet() {
  const [rotationValue, setRotationValue] = useState<number>(45);

  const onChangeRotation = (rotation: TRotation) => {
    switch(rotation) {
      case "left": {
        setRotationValue(prevRotationValue => prevRotationValue - 90);
        break;
      }

      case "right": {
        setRotationValue(prevRotationValue => prevRotationValue + 90);
        break;
      }
    }
  }

  const tiles: ITile[] = [
    {
      status: "success"
    },
    {
      status: "fail"
    },
    {
      status: "pending"
    },
    {
      status: "pending"
    },
    {
      status: "fail"
    },
    {
      status: "success"
    },
    {
      status: "success"
    },
    {
      status: "pending"
    },
    {
      status: "fail"
    },
  ]

  const onTileSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle("selected");
  }
 
  return (
    <>
      <div 
        className="tileset" 
        style={{
          transform: `translate(-50%, -50%) rotateX(62deg) rotateZ(${rotationValue}deg)`
        }}>
        {tiles.map((tile, index) => {
          return (
            <button 
              key={index}
              className={`
                tile
                ${tile.status}
              `}
              onClick={onTileSelect}
            ></button>
          )
        })}
      </div>
      <div className="controls">
        <button className="btn" onClick={() => onChangeRotation("left")}>Left</button>
        <button className="btn" onClick={() => onChangeRotation("right")}>Right</button>
      </div>
    </>
  )
}