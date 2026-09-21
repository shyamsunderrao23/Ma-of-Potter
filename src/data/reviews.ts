import type { CustomerReview } from '../types'

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Ananya Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    location: 'Bengaluru, India',
    rating: 5,
    date: '2 days ago',
    title: 'Exquisite pottery & securely packed!',
    comment: 'The dual-tone studio mugs are even more breathtaking in person. The tactile clay bottom feels wonderful to hold with morning tea. Zero plastic in packaging as well!',
    productPurchased: 'Rustic Earth Dual-Tone Studio Mug',
    verified: true,
    source: 'Google'
  },
  {
    id: 'rev-2',
    name: 'Rohan Mehra',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    location: 'Mumbai, India',
    rating: 5,
    date: '1 week ago',
    title: 'Transformative for evening meditation',
    comment: 'The aroma lamp diffuses lavender oil softly throughout my living room. The cutwork pattern casts warm dancing shadows on the wall. Pure craftsmanship.',
    productPurchased: 'Petal Perforated Ceramic Aroma Lamp',
    verified: true,
    source: 'Verified Buyer'
  },
  {
    id: 'rev-3',
    name: 'Priyanka Iyer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    location: 'New Delhi, India',
    rating: 5,
    date: '2 weeks ago',
    title: 'Stunning dinnerware quality',
    comment: 'Bought the organic rim platters and rice bowls for our anniversary dinner. Our guests could not stop complimenting how elevated the food presentation looked.',
    productPurchased: 'Organic Rim Stoneware Platter',
    verified: true,
    source: 'Google'
  },
  {
    id: 'rev-4',
    name: 'Vikram Joshi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    location: 'Pune, India',
    rating: 5,
    date: '3 weeks ago',
    title: 'Authentic artisan soul in every piece',
    comment: 'You can immediately tell these are not mass factory produced. The weight, glaze depth, and organic variations make each item feel like gallery art.',
    productPurchased: 'Kyoto Hand-Carved Ceramic Teapot',
    verified: true,
    source: 'Verified Buyer'
  }
]
