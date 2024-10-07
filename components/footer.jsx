'use client'

import Link from 'next/link'

export function FooterComponent() {
  return (
    (<footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Umar Chicken Master</h3>
            <p className="text-sm">Serving the best chicken dishes since 2005</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@umarchickenmaster.com</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/menu" className="hover:underline">Menu</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Umar Chicken Master. All rights reserved.</p>
        </div>
      </div>
    </footer>)
  );
}