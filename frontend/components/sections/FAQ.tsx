import { faqs } from '@/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Plus } from 'lucide-react';

const Faq = () => {
  return (
    <section className="bg-primary-5 py-16 px-4" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl space-y-4 lg:space-y-6">
        {/* Title */}
        <header className="text-center">
          <h2 id="faq-heading" className="text-3xl title-text text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to know about using Paywise Mall effectively.
          </p>
        </header>

        {/* Accordion Container */}
        <div className="mx-auto max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            role="region"
            aria-label="Frequently asked questions"
          >
            {faqs.map((faq, index) => {
              const triggerId = `faq-trigger-${index}`;
              const contentId = `faq-content-${index}`;

              return (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-none rounded-none"
                >
                  <div className="flex items-stretch overflow-hidden">
                    {/* Left Icon Block */}
                    <div
                      className="bg-secondary-1 flex items-center justify-center px-5"
                      aria-hidden="true"
                    >
                      <Plus
                        className="h-5 w-5 text-white transition-transform duration-300 group-data-[state=open]:rotate-45"
                        aria-hidden="true"
                        focusable="false"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="bg-primary-2 flex-1">
                      <AccordionTrigger
                        id={triggerId}
                        aria-controls={contentId}
                        className="px-6 py-5 text-left text-black font-medium hover:no-underline"
                      >
                        <span>{faq.question}</span>
                      </AccordionTrigger>

                      <AccordionContent
                        id={contentId}
                        aria-labelledby={triggerId}
                        className="px-6 pb-5 text-sm text-black/70"
                      >
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
