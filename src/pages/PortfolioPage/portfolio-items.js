import React from 'react';
import './style.scss';

export default [{
  name: 'zatanna',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Zatanna
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vutsalsinghal/Zatanna"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/G_j0pi-ivbs"><i className="fab fa-youtube"></i></a>
      </div>
      <div className='portfolio-item__desc'>
        <ul>
          <li>- Music Streaming service built using Ethereum</li>
          <li>- Built a recommender system using AWS Sagemaker to help discover new songs</li>
        </ul>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-ethereum"></i>
        <i className="fab fa-amazon"></i>
      </div>
    </div>
  )
},{
  name: 'diningConcierge',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Dining Concierge
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vutsalsinghal/AWS_Chatbot"><i className="fab fa-github"></i></a>
      </div>
      <div className='portfolio-item__desc'>
        <ul>
          <li>- Built a highly scalable, serverless chatbot using AWS</li>
          <li>- Integrated the chatbot with an amazing ReactJS front-end</li>
        </ul>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-amazon"></i>
      </div>
    </div>
  )
},{
  name: 'offChainStorage',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Off-Chain Storage
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vutsalsinghal/Off-Chain-Storage"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="http://dapp.pythonanywhere.com/ipfsLink"><i className="fa fa-globe" aria-hidden="true"></i></a>
      </div>
      <div className='portfolio-item__desc'>
        <ul>
          <li>- Created a dapp to address the high cost of storage onchain</li>
          <li>- The IPFS hash of the data uploaded is pushed on-chain</li>
        </ul>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-ethereum"></i>
      </div>
    </div>
  )
},{
  name: 'handwrittenDigit',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Digits Classification
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vutsalsinghal/Django_MNIST_wrapper"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://pyofeyblog.pythonanywhere.com/mnist"><i className="fa fa-globe" aria-hidden="true"></i></a>
      </div>
      <div className='portfolio-item__desc'>
        <ul>
          <li>- Trained a CNN on 60k/10k handwritten digit with a validation accuracy of 99.21%</li>
          <li>- Created an amazing Django wrapper to interact with it</li>
        </ul>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-ethereum"></i>
      </div>
    </div>
  )
},{
  name: 'cleanFlow',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      CleanFlow
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vutsalsinghal/CleanFlow"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://pypi.org/project/CleanFlow/"><i className="fab fa-python" aria-hidden="true"></i></a>
      </div>
      <div className='portfolio-item__desc'>
        <ul>
          <li>- Built a library for cleaning, pre-processing and exploring big data in a scalable and distributed manner.</li>
          <li>- Created a PyPi package</li>
        </ul>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-python"></i>
      </div>
    </div>
  )
},{
  name: 'attendanceCoin',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Attendance Coin
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vutsalsinghal/Attendance_Coin"><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://vutsalsinghal.github.io/Attendance_Coin"><i className="fa fa-globe" aria-hidden="true"></i></a>
      </div>
      <div className='portfolio-item__desc'>
        <ul>
          <li>- Created a fungible ERC20 coin “Attendance Coin” and a non-fungible ERC721 “Class Badge”</li>
          <li>- Built a faucet for initial coin disbursement</li>
        </ul>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-ethereum"></i>
      </div>
    </div>
  )
}]