const DamerauLevenshtein = ( x, y ) => 
{
    let a = x.toLowerCase();
    let b = y.toLowerCase();
	var i,j,cost;
	var distance = [];
 
	if ( a.length === 0 ){ return b.length };
    if ( b.length === 0 ){ return a.length };
 
    //postavljanje prvog redka i stupca (niz prirodnih brojeva)
	for ( i = 0; i <= a.length; i++ ){
		distance[ i ] = [];
		distance[ i ][ 0 ] = i;
	};
 
	for ( j = 0; j <= b.length; j++ ){
		distance[ 0 ][ j ] = j;
	};
 
	for ( i = 1; i <= a.length; i++ ){
		for ( j = 1; j <= b.length; j++ ){
			if ( a.charAt( i - 1 ) === b.charAt( j - 1 ) ){ cost = 0; }
			else{ cost = 1 };
 
			distance[ i ][ j ] = Math.min( distance[ i - 1 ][ j ] + 1, distance[ i ][ j - 1 ] + 1, distance[ i - 1 ][ j - 1 ] + cost );
			
			if( i > 1 && j > 1 &&  a.charAt(i - 1) === b.charAt(j-2) && a.charAt(i-2) == b.charAt(j-1)){
                distance[i][j] = Math.min(
                distance[i][j],
                distance[i - 2][j - 2] + cost
            )};
		};
	};
    console.log(a+"| "+b+"|"+distance[ a.length ][ b.length ]);
	return distance[ a.length ][ b.length ];
};

export default DamerauLevenshtein;