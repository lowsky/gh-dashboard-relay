MAIN='react-suspense-meetup-demo-gta44dk2o-lowsky.vercel.app'
vercel ls 2>&1 |\
cut -c 10- |grep https |sed -e 's|vercel.app.*|vercel.app|g' |\
grep -v '$MAIN' |\
xargs  vercel rm -y
