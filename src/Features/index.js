import React from 'react';

import { UserContext } from '../App';

import Button from '../components/Button';

import './Features.scss';

const overlayTitles = [
    {
      h1: "Model 3",
      p: (
        <p>
          $3,000 ZEV Subsidy now available to residents and businesses in Victoria
          on eligible Model 3. <a href="#">Learn More</a>​
        </p>
      ),
      buttons: [
        {
          colour: "black",
          text: "Custom Order",
        },
        {
          colour: "white",
          text: "Existing Inventory",
        },
      ],
    },
    {
      h1: "Solar and Powerwall",
      p: "Power Everything​",
      buttons: [
        {
          colour: "black",
          text: "Learn More",
        },
      ],
    },
    {
      h1: "Model Y",
      p: "​",
      buttons: [
        {
          colour: "black",
          text: "Learn More",
        },
        {
          colour: "white",
          text: "Stay Updated",
        },
      ],
    },
    {
      h1: "Model S",
      p: <a href="#">Schedule a Touchless Test Drive</a>,
      buttons: [
        {
          colour: "black",
          text: "Custom Order",
        },
        {
          colour: "white",
          text: "Existing Inventory",
        },
      ],
    },
    {
      h1: "Model X",
      p: <a href="#">Schedule a Touchless Test Drive</a>,
      buttons: [
        {
          colour: "black",
          text: "Custom Order",
        },
        {
          colour: "white",
          text: "Existing Inventory",
        },
      ],
    },
  ];

export default function Features() {
    const [ panelCount, setPanelCount ] = React.useState(0);
    const [ overlayOpacity, setOverlayOpacity ] = React.useState(1);
    const [ state, dispatch] = React.useContext(UserContext);
    const [ blur, setBlur] = React.useState(0);

    const checkScrollEvent = (event) => {
        // console.log(event);
        let position = window.pageYOffset/window.innerHeight;
        console.log(position);
        // if (-(window.innerHeight - window.pageYOffset)/window.innerHeight)

        if (position % 1 <= 0.3 && position % 1 >= 0) {
            setOverlayOpacity(1 - (position % 1)/0.3);
        } else if (position >= 0.7) {
            setOverlayOpacity(((position % 1) - 0.7)*(10/3));
        } else {
            setOverlayOpacity(0);
        }

        setPanelCount(Math.round(position));
        console.log(state.blur_active)
    }

    React.useEffect(() => {
        window.addEventListener("scroll", checkScrollEvent);

        return (() => {
            window.removeEventListener("scroll", checkScrollEvent);
        })
    }, [])

    return (
        <div class = {`features ${state.blur_active ? "blur" : ""}`}>
            {console.log(state.blur_active)}
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>

            <div class = "overlay" style ={{opacity: overlayOpacity}}>
                <div class = "overlay__text">
                    <h1>{overlayTitles[panelCount].h1}</h1>
                    <p>{overlayTitles[panelCount].p}</p>
                </div>
                <div class = "overlay__buttons">
                {overlayTitles[panelCount].buttons.map(button => {
                    return <Button colour = {button.colour} text = {button.text} />
                })}
                </div>
            </div>
            
        </div>
    )
}
