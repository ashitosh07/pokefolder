'use client';
import { useWatchlist } from '../../hooks/use-watchlist';
import Card from '../../components/card/link';
import { getPrice } from '@/lib/utils';
export default function Collections() {
  const { watchlist } = useWatchlist();

  const totalCollectionPriceGBP = watchlist.reduce((total, card) => {
    const tcgplayerPrice = card.tcgplayer?.prices?.holofoil?.mid || 0;
    // const cardmarketPrice = card.cardmarket?.prices?.trendPrice || 0;
    const totalPrice = tcgplayerPrice;

    return total + totalPrice;
  }, 0);

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-4">My Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchlist.length === 0 ? (
          <p className="text-gray-600">Your watchlist is empty.</p>
        ) : (
          // @ts-ignore
          watchlist.map((card) => <Card key={card.id} {...card} />)
        )}
      </div>

      <div className="text-right mt-4">
        <strong>Total Price :</strong>{' '}
        {getPrice('GBP', totalCollectionPriceGBP)}
      </div>
    </div>
  );
}
