echo "Injecting secrets..."
# echo "Updating Google JSON"
# echo $GOOGLE_SERVICES_JSON | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json"
# echo "Updating Google plist"
# echo $GOOGLE_SERVICES_PLIST | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/ios/GoogleService-Info.plist"
echo "Updating android secret"
echo $ANDROID_SECRET > "$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/assets/appcenter-config.json"
echo "Updating iOS secret"
echo $IOS_SECRET > "$APPCENTER_SOURCE_DIRECTORY/ios/Glitz/AppCenter-Config.plist"
echo "Finished injecting secrets."
printf "\nInstalling Pods...\n"
cd ios
pod install --repo-update
cd ..
printf "\nFinished installing Pods.\n"