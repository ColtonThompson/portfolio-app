import Navbar from "../components/Navbar";

export default function Index() {

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
          const response = await fetch('/api/contact', {
            method: 'post',
            body: new URLSearchParams(data),
          });
          if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
          }
          alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
          console.error(err);
          alert("We can't submit the form, try again later?");
        }
      }

    return(
        <main>
            <Navbar/>
            <form className="container border-2 px-4 py-4">
                <h1 className="text-white text-3xl">Get in touch</h1>
                <div className="email block">
                    <label className="text-slate-300" htmlFor="frm-email">Email</label>
                    <input
                    id="frm-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    />
                </div>
                <div className="block phone">
                    <label className="text-slate-300" htmlFor="frm-phone">Phone</label>
                    <input
                    id="frm-phone"
                    type="text"
                    name="phone"
                    autoComplete="tel"
                    required
                    />
                </div>
                <div className="name block space-x-4">
                    <div>
                    <label className="text-slate-300" htmlFor="frm-first">First Name</label>
                    <input
                        id="frm-first"
                        type="text"
                        name="first"
                        autoComplete="given-name"
                        required
                    />
                    </div>
                    <div>
                    <label className="text-slate-300" htmlFor="frm-last">Last Name</label>
                    <input
                        id="frm-last"
                        type="text"
                        name="last"
                        autoComplete="family-name"
                        required
                    />
                    </div>
                </div>
                <div className="message block">
                    <label className="text-slate-300" htmlFor="frm-message">Message</label>
                    <textarea id="frm-message" rows="6" name="message"></textarea>
                </div>
                <div className="button block">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}