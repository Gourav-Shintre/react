import React from 'react';

const Card = ({username= "GS",role="not asigned yet" , newarr=[]}) => {
    // console.log(props);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://www.w3schools.com/images/picture.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
             eius tempora red laborum, ratione tempore? Veritatis, perferendis.
             Dign
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username || "Gourav"}
                <ul>
                {newarr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              {role}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
