import { getters } from '../../../src/store/modules/cart'

describe('getters', () => {
  it('discountAmount', () => {
    const state = {
      items: [
        {
          cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg',
          price: '350',
          title: 'Harry Potter and the Philosopher\'s Stone (I)',
          id: '9781408855652',
          quantity: 3
        },
        {
          cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855669.jpg',
          price: '350',
          title: 'Harry Potter and the Chamber of Secrets (II)',
          id: '9781408855669',
          quantity: 2
        },
        {
          cover: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2413/9780241392362.jpg',
          price: '260',
          title: 'The Fork, the Witch, and the Worm',
          id: '9780241392362',
          quantity: 1
        }
      ],
      hpBookIds: [
        '9781408855652',
        '9781408855669',
        '9781408855676',
        '9781408855683',
        '9781408855690',
        '9781408855706',
        '9781408855713'
      ]
    }
    const result = getters.discountAmount(state)
    expect(result).toBe(140)
  })
})
