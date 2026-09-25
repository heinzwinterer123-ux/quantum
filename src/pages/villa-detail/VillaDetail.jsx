import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getVillaBySlug } from '../../data/villas';
import SiteFooter from '../../components/footer/Footer';
import AvailableVilla from './AvailableVilla';
import ComingSoonVilla from './ComingSoonVilla';
import './villa-detail.css';

function VillaDetail() {
  const { slug } = useParams();
  const villa = getVillaBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!villa) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <header className="villa-header">
        <Link to="/" className="logo-text">VB</Link>
        <div className="villa-header-center" />
        <Link to="/#collection" className="villa-header-link">Collection</Link>
      </header>

      {villa.status === 'available' ? (
        <AvailableVilla villa={villa} />
      ) : (
        <ComingSoonVilla villa={villa} />
      )}

      <SiteFooter />
    </>
  );
}

export default VillaDetail;
