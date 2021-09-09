import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", ]
    }
];

export const CustomSectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            
            <SectionList
                sections={ casas }
                keyExtractor={ (item, index) => item + index }

                ListHeaderComponent={ () => <HeaderTitle title='Section List'/> }
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 50 }}>
                        <HeaderTitle title={ 'Total de casas: ' + casas.length } />
                    </View>
                ) }

                renderItem={ ({ item }) => <Text>{ item }</Text> }
                stickySectionHeadersEnabled
                renderSectionHeader={ ({ section:{ casa } }) => (
                    <View style={{ backgroundColor: '#F2F2F2' }}>
                        <HeaderTitle title={ casa }/>
                    </View>
                ) }
                renderSectionFooter={ ({ section:{ data } }) => (
                    <HeaderTitle title={'Total: ' + data.length }/>
                ) }
                ItemSeparatorComponent={ () => <ItemSeparator/> }

                showsVerticalScrollIndicator={ false }
            />
        </View>
    );
}
