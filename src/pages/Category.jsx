import React from 'react'
import { getDocs, collection,query,where,orderBy,limit, startAfter } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import ListingItem from '../components/ListingItem'


function Category() {
    const [ loading, setloading] = useState(true);
    const [ listings, setListings] = useState(null);

    const params = useParams();

    const fetchLisiting = async () => {
        try {
            const listingRef = collection(db, 'listing')
            const q = query(listingRef,where('type','==',params.categoryName),orderBy('timestamp','desc'),limit(10))

            const querySnap = await getDocs(q)
            const listings = []
            querySnap.forEach((doc) => {
                return listings.push({
                    id:doc.id,
                    data:doc.data()
                })
            })

            setListings(listings)
            setloading(false)
            console.log(querySnap)
        } catch (error) {
            toast.error('could not fetch listing')
           console.log(error) 
        }
    }

    useEffect(() => {
        fetchLisiting()
    },[params.categoryName])

  return (
    <div className="category">
        <header>
            <p className="pageHeader">
                {params.categoryName === 'rent'? 'Places for rent':'Places for sale'}
            </p>
        </header>
        {loading ? <Spinner/>:listings && listings.length > 0 ? (
        <>
        <main>
            <ul className="categoryListings">
                {listings.map((listing) => (
                    <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
                ))}
            </ul>
        </main>
        </>):(
            <p>
                No listings for {params.categoryName}
            </p>
        )}
    </div>
  )
}

export default Category