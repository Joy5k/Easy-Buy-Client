import { useEffect, useState } from "react"

const UseSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    // const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://y-dun-gamma.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                })
        }
    }, [email])
    return [isSeller]
}
// isSellerLoading

export default UseSeller;