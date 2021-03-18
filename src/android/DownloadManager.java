package downloadmanager;

import android.content.Context;
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
            String fileName = args.getString(1);
            String des = args.getString(2);
            JSONObject options = args.getJSONObject(3);
            Boolean usePublic = false;
            usePublic = options.getBoolean("setDestinationInExternalPublicDir");
            this.startDownload(url, fileName, des, usePublic, callbackContext);
            return true;
        }
        if (action.equals("addCompletedDownload")) {
            String title = args.getString(0);
            String description = args.getString(1);
            String mimeType = args.getString(2);
            String path = args.getString(3);
            long length = args.getLong(4);
            this.addCompletedDownload(title, description, mimeType, path, length, callbackContext);
            return true;
        }
        return false;
    }
    
    private void addCompletedDownload(String title, String description, String mimeType, String path, long length, CallbackContext callbackContext) {
        
        if(title != null && title.length() > 0 && description != null && description.length() > 0 && mimeType != null && mimeType.length() > 0 && path != null && path.length() > 0 && length > 0) {
            
            android.app.DownloadManager downloadManager = (android.app.DownloadManager) cordova.getActivity().getApplicationContext().getSystemService(Context.DOWNLOAD_SERVICE);            
                    
            try {
                downloadManager.addCompletedDownload(title, description, false, mimeType, path, length, true);
            } catch (Exception e) {
                callbackContext.error(e.getMessage());
            }
            
            callbackContext.success(title);
        } else {
            callbackContext.error("Invalid one or more arguments.");
        }
    }

    private void startDownload(String url, String fileName, String description, Boolean usePublic, CallbackContext callbackContext) {
        if (url != null && url.length() > 0) {
            try {
                fileName = URLDecoder.decode(fileName,"UTF-8");
            } catch (UnsupportedEncodingException e) {
                callbackContext.error("Error in converting filename");
            }
            android.app.DownloadManager downloadManager = (android.app.DownloadManager) cordova.getActivity().getApplicationContext().getSystemService(Context.DOWNLOAD_SERVICE);
            Uri Download_Uri = Uri.parse(url);
            android.app.DownloadManager.Request request = new android.app.DownloadManager.Request(Download_Uri);
            //Restrict the types of networks over which this download may proceed.
            request.setAllowedNetworkTypes(android.app.DownloadManager.Request.NETWORK_WIFI | android.app.DownloadManager.Request.NETWORK_MOBILE);
            //Set whether this download may proceed over a roaming connection.
            request.setAllowedOverRoaming(false);
            //Set the title of this download, to be displayed in notifications (if enabled).
            request.setTitle(fileName);
            //Set a description of this download, to be displayed in notifications (if enabled)
            request.setDescription(description);
            //Set the local destination for the downloaded file to a path within the application's external files directory
            //If usePublic is true, use setDestinationInExternalPublicDir().
            if (usePublic) {
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);
            } else {
                request.setDestinationInExternalFilesDir(cordova.getActivity().getApplicationContext(), Environment.DIRECTORY_DOWNLOADS, fileName);
            }
            //Set visiblity after download is complete
            request.setNotificationVisibility(android.app.DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
            long downloadReference = downloadManager.enqueue(request);
            callbackContext.success(url);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
