import React from 'react'
import ReactModal from 'react-modal'

export default function Modal({ 
    modalIsOpen, 
    closeModal,
    pokemon 
  }) {
  return (
    <ReactModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				<button onClick={closeModal}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</ReactModal>
  )
}
