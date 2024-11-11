import React from 'react'

const UserCard = ({el}) => {
    console.log('ele userCard =>',el)
  return (
    <div><div class="card">
    <div class="content">
      <div class="title">{el.name}</div>
      <div class="price">$19.99</div>
      <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
    </div>
      <button>
        Buy now
      </button>
</div></div>
  )
}

export default UserCard