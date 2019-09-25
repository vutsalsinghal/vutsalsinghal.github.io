import React from "react";
import "./style.scss";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

export default [
  {
    id: "0",
    name: "calorieCompose",
    render: (
      <AccordionItem className="portfolio-item" uuid="0">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Calorie Compose</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/calorie-compose"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Scripted container orchestration for 4 containers using docker
                compose.
              </li>
              <li>
                ● Built Node backend with Knex for Postgres and Graphql server
                with React frontend.
              </li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-docker"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-node"></i>
            <i className="fab fa-dev"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "1",
    name: "docker4edu",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Docker For Edu</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/docker-for-ed"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Created a common repository containing several docker images
                for various courses at NYU.
              </li>
              <li>
                ● Automated the devops pipeline using Travis CI. Decreased
                Travis build time by 50% using cache.
              </li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-docker"></i>
            <i className="fab fa-python"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-dev"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "2",
    name: "react-maps",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Nearby Places</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/nearby-places"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nearby-places.vutsalsinghal.xyz"
            >
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>● Search nearby places using Google maps API.</li>
              <li>● Interactive React application.</li>
              <li>● Automated the devops pipeline using CircleCI.</li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-docker"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-dev"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "3",
    name: "portfolio",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Dev Portfolio</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/vutsalsinghal.github.io"
            >
              <i className="fab fa-github"></i>
            </a>
            <a rel="noopener noreferrer" href="http://vutsalsinghal.xyz">
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>● Created React porfolio using opensource template.</li>
              <li>● Automated the Github pages build using Circle CI.</li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-docker"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-dev"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "4",
    name: "zatanna",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Zatanna</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/Zatanna"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/G_j0pi-ivbs"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Music Streaming service built using Ethereum blockchain and
                AWS.
              </li>
              <li>
                ● Built a recommender system using AWS Sagemaker to help
                discover new songs
              </li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-python"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-ethereum"></i>
            <i className="fab fa-amazon"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "5",
    name: "diningConcierge",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Dining Concierge</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/AWS_Chatbot"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Built a highly scalable, serverless chatbot using AWS to get
                restaurant recommendations on mobile based on the cusine.
              </li>
              <li>
                ● Integrated the chatbot with an amazing ReactJS front-end
              </li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-amazon"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "6",
    name: "offChainStorage",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Off-Chain Storage</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/Off-Chain-Storage"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://dapp.pythonanywhere.com/ipfsLink"
            >
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Created a dapp to address the high cost of storage onchain
              </li>
              <li>● The IPFS hash of the data uploaded is pushed on-chain</li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-python"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-ethereum"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "7",
    name: "handwrittenDigit",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Digits Classification</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/Django_MNIST_wrapper"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pyofeyblog.pythonanywhere.com/mnist"
            >
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Trained a CNN on 60k/10k handwritten digit with a validation
                accuracy of 99.21%
              </li>
              <li>● Created an amazing Django wrapper to interact with it</li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-python"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-ethereum"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "8",
    name: "cleanFlow",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">CleanFlow</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/CleanFlow"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pypi.org/project/CleanFlow/"
            >
              <i className="fab fa-python"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Built a library for cleaning, pre-processing and exploring big
                data in a scalable and distributed manner.
              </li>
              <li>● Created a PyPi package</li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-python"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "9",
    name: "attendanceCoin",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Attendance Coin</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vutsalsinghal/Attendance_Coin"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vutsalsinghal.github.io/Attendance_Coin"
            >
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Created a fungible ERC20 coin “Attendance Coin” and a
                non-fungible ERC721 “Class Badge”
              </li>
              <li>● Built a faucet for initial coin disbursement</li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-ethereum"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  },
  {
    id: "10",
    name: "passwordManager",
    render: (
      <AccordionItem className="portfolio-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="portfolio-item__title">Password Manager</div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="portfolio-item__links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://allsafe.pythonanywhere.com/"
            >
              <i className="fa fa-globe"></i>
            </a>
          </div>
          <div className="portfolio-item__desc">
            <ul>
              <li>
                ● Created a web and android (using Sketchware) application.
              </li>
              <li>
                ● Implemented Two-Step authentication, passwords download,
                password reset, login history, etc from scratch.
              </li>
            </ul>
          </div>
          <hr />
          <p className="portfolio-item__desc">Built with:</p>
          <div className="portfolio-item__icon">
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-ethereum"></i>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    )
  }
];
