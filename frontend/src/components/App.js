import React from 'react'

import Radar from 'radar-sdk-js'

export function App(props) {
    const publishableKey = 'prj_test_pk_c62aacd16a819c3cf675f1952e48f90019149f72'
    Radar.initialize(publishableKey)

    Radar.setPlacesProvider(Radar.PLACES_PROVIDER.FACEBOOK);

    Radar.trackOnce(function(status, location, user, events) {
        console.log('callback')
        console.log(status)
        console.log(location)
        console.log(user)
        console.log(events)
        if (status === Radar.STATUS.SUCCESS) {
            console.log('success')
          if (user.place.chain.slug === 'walmart') {
            // do something
          }
        }
      });

    return (
        <div className="h-100">
            hello world
        </div>
    )
}


export default App