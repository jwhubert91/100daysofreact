import React,{useState,useEffect} from 'react'
import store from '../redux'
import {prefersSpam,prefersCreditCards,prefersCritical,prefersExtendedWarrantyCalls} from '../redux/mailPreferences'

function MailPage() {
  const [wantsSpam,setWantsSpam] = useState(true)
  const [wantsCards,setWantsCards] = useState(true)
  const [wantsCritical,setWantsCritical] = useState(true)
  const [wantsWarranty,setWantsWarranty] = useState(true)

  function handleSpam() {
    setWantsSpam(prevValue => !prevValue)
  }
  function handleCards() {
    setWantsCards(prevValue => !prevValue)
  }
  function handleCritical() {
    setWantsCritical(prevValue => !prevValue)
  }
  function handleWarranty() {
    setWantsWarranty(prevValue => !prevValue)
  }

  useEffect(() => {
    store.dispatch(prefersSpam(wantsSpam))
    store.dispatch(prefersCreditCards(wantsCards))
    store.dispatch(prefersCritical(wantsCritical))
    store.dispatch(prefersExtendedWarrantyCalls(wantsWarranty))
  },[wantsSpam,wantsCards,wantsCritical,wantsWarranty])

  return (
    <div className='pt-2'>
      <h1 className='text-center'>Mail Settings</h1>
      <form>
          <fieldset className="form-group">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={wantsSpam} 
              checked={wantsSpam} 
              onChange={handleSpam}
            />
            <label className="form-check-label">
              <p>Please keep me signed up for daily and weekly digests of all spam mail and newsletters.</p>
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={wantsCards} 
              checked={wantsCards} 
              onChange={handleCards}
            />
            <label className="form-check-label">
              <p>Please send pre-qualified credit cards to my home address.</p>
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={wantsCritical} 
              checked={wantsCritical} 
              onChange={handleCritical}
            />
            <label className="form-check-label">
              <p>Please send critical messages regarding my account to my spam folder.</p>
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={wantsWarranty} 
              checked={wantsWarranty} 
              onChange={handleWarranty}
            />
            <label className="form-check-label">
              <p>Please call my elderly parents and inform them their extended warranty is about to expire unless they give up their social security numbers.</p>
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default MailPage
