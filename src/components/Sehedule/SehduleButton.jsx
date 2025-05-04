import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

// Define animations
const overlayShow = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

const overlayHide = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`

const contentShow = keyframes`
  from { 
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to { 
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

const contentHide = keyframes`
  from { 
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to { 
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
`

// Styled components for animations
const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 40;
  
  &[data-state="open"] {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &[data-state="closed"] {
    animation: ${overlayHide} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`

const StyledContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 28rem;
  max-height: 85vh;
  padding: 1.5rem;
  z-index: 50;
  overflow-y: auto;
  
  &[data-state="open"] {
    animation: ${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &[data-state="closed"] {
    animation: ${contentHide} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &:focus {
    outline: none;
  }
  
  .dark & {
    background-color: #1f2937;
  }
`

const SehduleButton = () => {
  return (
    <div className="">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
            Schedule Free Consultation
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <StyledOverlay />
          <StyledContent>
            <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Schedule Your Free Consultation
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 dark:text-gray-300 mb-4">
              Fill out the form below and we'll contact you to schedule your free consultation.
            </Dialog.Description>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              {/* Rest of the form fields remain unchanged */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Time
                  </label>
                  <select 
                    id="time" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Type
                </label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="commercial">Strata Painting</option>
                  <option value="cabinet">Cabinet Painting</option>
                  <option value="cabinet">Staining</option>
                  <option value="other">Power Washing</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Details
                </label>
                <textarea 
                  id="message" 
                  rows="3" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4] dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Dialog.Close asChild>
                  <button type="button" className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Cancel
                  </button>
                </Dialog.Close>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white rounded-md transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
            
            <Dialog.Close asChild>
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Dialog.Close>
          </StyledContent>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default SehduleButton
