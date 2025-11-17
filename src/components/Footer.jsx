export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} FieldFlow Africa — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
