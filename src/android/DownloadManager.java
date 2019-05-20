package downloadmanager;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.net.Uri;
import android.os.Environment;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**
 * This class echoes a string called from JavaScript.
 */
public class DownloadManager extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("download")) {
            String url = args.getString(0);
            this.startDownload(url, callbackContext);
            return true;
        } else if (action.equals("downloadObject")) {
            JSONObject options = args.getJSONObject(0);
            String url = options.getString("url");
            String filename = options.getString("filename");
            String description = options.getString("description");
            this.startDownload(url, filename, description, callbackContext);
        }
        return false;
    }

    private void startDownload(String url, CallbackContext callbackContext) {
        String filename = url.substring(url.lastIndexOf("/") + 1, url.length());
        try {
            if (url != null && url.length() > 0) {
                filename = URLDecoder.decode(filename, "UTF-8");
                ApplicationInfo applicationInfo = cordova.getActivity().getApplicationContext().getApplicationInfo();
                int stringId = applicationInfo.labelRes;
                String appName = stringId == 0 ? applicationInfo.nonLocalizedLabel.toString() : cordova.getActivity().getApplicationContext().getString(stringId);
                startDownload(url, filename, appName + " file download", callbackContext);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        } catch (UnsupportedEncodingException e) {
            callbackContext.error("Error in converting filename");
        }
    }

    private void startDownload(String url, String filename, String description, CallbackContext callbackContext) {
        android.app.DownloadManager downloadManager = (android.app.DownloadManager) cordova.getActivity().getApplicationContext().getSystemService(Context.DOWNLOAD_SERVICE);
        Uri Download_Uri = Uri.parse(url);
        android.app.DownloadManager.Request request = new android.app.DownloadManager.Request(Download_Uri);
        //Set the title of this download, to be displayed in notifications (if enabled).
        request.setTitle(filename);
        //Set a description of this download, to be displayed in notifications (if enabled)
        request.setDescription(description);
        //Set the local destination for the downloaded file to a path within the application's external files directory
        request.setDestinationInExternalFilesDir(cordova.getActivity().getApplicationContext(), Environment.DIRECTORY_DOWNLOADS, filename);
        //Set visiblity after download is complete
        request.setNotificationVisibility(android.app.DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
        long downloadReference = downloadManager.enqueue(request);
        callbackContext.success(url);
    }
}