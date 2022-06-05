import { MouseEvent, useState } from "react"

type TRotation = "left" | "right";
type TStatus = "pending" | "success" | "fail";

interface ITile {
  status: TStatus,
  cube?: boolean
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
      status: "pending",
      cube: true
    },
    {
      status: "pending"
    },
    {
      status: "fail",
      cube: true
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
      status: "fail",
      cube: true
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
            >
              {tile.cube && (
                <span className="cube">
                  <span className="face top"></span>
                  <span className="face bottom"></span>
                  <span className="face left"></span>
                  <span className="face right"></span>
                  <span className="face front"></span>
                  <span className="face back"></span>
                </span>
              )}
            </button>
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