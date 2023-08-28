import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ selectedJob, item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{uri: item.employer_logo}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard
