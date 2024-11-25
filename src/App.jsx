import React from "react";
const pricingplans =[
  {
    title :"FREE",
    price :"$0/month",
    features :[
      "single user",
      "50GB storage",
      "Unlimited Public Projects",
      "Community Access",
    ],
    unavailableFeatures :[
      "Unlimited Public Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
  },
  {
    title :"PLUS",
    price :"$9/month",
    features : [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Public Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
    ],
    unavailableFeatures : [ "Monthly Status Report "],
  },
  {
    title :"PRO",
    price :"$49/month",
    features : [
      "Unlimited Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Public Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Report ",
  ],
      unavailableFeatures :[],

  },
];
const priceCard =() =>{
  return(
    <div style ={{display :"flex",
      justifyContent :"center",
      gap: "8px"
    }}>
      {pricingplans.map((plan,index)=>(
        <div
          key={index}
          style ={{
            border: "6px solid #ccc " ,
            borderRadius : "8px",
            borderColor: "blue",
            padding :"center",
            margin :"7px",
            width :"250px",
            textAlign :  "left",
            
          
          } }
          >
            <h3 >{plan.title}</h3>
            <h2>{plan.price}</h2>
            <ul style={{listStyleType :"none",padding: 20}}>
              {plan.features.map((feature, i)=>(
                <li key={i}
                style={{color :"block"}}>
                  ✔️{feature}
                </li>
              ))}
              {plan.unavailableFeatures.map((feature, i)=>(
                <li key={i}
                style={{color :"block",
                  textDecoration :"linen",
                  
                }}>
                   ❌{feature}
                </li>
              ))}
            </ul>
            <button style={{backgroundColor:"#007BFF",
              color :"#fff",
              border :"none",
              padding :"10px 20px",
              borderRadius :"30px",
              cursor :"pointer",
              paddingBottom : "10px",
              width :"90%"
            }}
            >
              BUTTON
            </button>
        </div>
      ))}

    </div>
  );
};
export default priceCard ;