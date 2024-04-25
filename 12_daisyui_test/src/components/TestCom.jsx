import { Typography } from "@material-tailwind/react";
import React from "react";

const TestCom = ({
  id,
  name,
  job,
  active,
  creation,
  locked,
  activeHandler,
}) => {
  const setActive = (id) => {
    if (id !== undefined && !active && !creation) {
      activeHandler(id);
      return;
    }
  };

  const goToCreation = () => {
    if (locked) return;

   //  if ("alt" in window) {
   //    alt.emit("Character:charcreation");
   //  }
  };

  return (
    <div className="w-1/2">
      <div
        onClick={() => {
          id !== undefined ? setActive(id) : goToCreation();
        }}
        style={locked ? { opacity: "0.5", cursor: "default" } : undefined}
        className="w-full max-h-20 p-3 bg-white/30 text-white border-solid border-white/30 border-[0.5px] rounded-md flex items-center cursor-pointer"
      >
        <div
          style={active ? { background: "#888888" } : undefined}
          className="h-1/2 p-2 pr-3 pl-3 text-white  bg-gradient-to-b from-blue-primary to-blue-secondary rounded-lg shadow-innerboxes mr-2"
        >
          {!creation && id !== undefined && (
            <Typography variant="h6">#{id}</Typography>
          )}
          {(creation || locked) && (
            <Typography variant="h6">
              <i className="fa-solid fa-user"></i>
            </Typography>
          )}
        </div>
        {!creation && job && name && (
          <div className="flex-grow flex flex-col justify-center ml-1">
            <Typography variant="paragraph" className="text-white/80">
              job
            </Typography>
            <Typography variant="h6" className="-mt-2 font-black">
              name
            </Typography>
          </div>
        )}
        {creation && (
          <div className="flex-grow flex flex-col justify-center ml-1">
            <Typography variant="paragraph" className="text-white/80">
              Slot Disponivel
            </Typography>
            <Typography variant="h6" className="-mt-2 font-black">
              Criar Personagem
            </Typography>
          </div>
        )}
        {locked && (
          <div className="flex-grow flex flex-col justify-center ml-1">
            <Typography variant="paragraph" className="text-white/80">
              Bloqueado
            </Typography>
            <Typography variant="h6" className="-mt-2 font-black">
              Compre um slot
            </Typography>
          </div>
        )}
        <div className="flex ml-auto mr-2">
          {!creation && !locked && <i className="fa-solid fa-circle-right"></i>}
          {creation && !locked && <i className="fa-solid fa-circle-plus"></i>}
          {locked && <i className="fa-solid fa-lock"></i>}
        </div>
      </div>
    </div>
  );
};

export default TestCom;
