/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: `Cillum laboris cupidatat consequat enim aliqua amet eiusmod dolor. Duis consequat proident elit amet aliquip.`,
  },
  {
    id: 2,
    question: "Where can I buy tickets?",
    answer: `Tickets to shows are usually handled by the venues themselves. Details for each event can be found in the calendar event's description on the schedule page. If you have any questions, email contact@mail.com`,
  },
  {
    id: 3,
    question: "Is there an age limit?",
    answer: `Deserunt sunt occaecat nisi irure officia velit. Cupidatat minim minim ea dolore id enim deserunt mollit commodo ullamco.`,
  },
  // More questions...
];

export default function FAQ() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-400">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
            elementum blandit et.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
